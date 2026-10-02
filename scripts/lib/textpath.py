"""Turns text into SVG path outlines from a font file, so the cards look the same everywhere
(no font loading inside GitHub's image sandbox). Reads a JSON list of requests on stdin:

  [{"font": "<path to .woff2/.ttf>", "axes": {"wght": 400, "opsz": 72}, "size": 46,
    "tracking": -0.01, "text": "Curiosity"}]

and writes a JSON list of {"d": "<path data, baseline at y=0>", "width": <px>}.
Needs: pip install fonttools brotli
"""
import json
import sys

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

cache = {}


def load(path, axes):
    key = (path, tuple(sorted(axes.items())))
    if key not in cache:
        font = TTFont(path)
        if "fvar" in font:
            font = instancer.instantiateVariableFont(font, axes, inplace=False)
        cache[key] = (font, font.getBestCmap(), font.getGlyphSet(), font["head"].unitsPerEm)
    return cache[key]


def outline(request):
    font, cmap, glyphs, upem = load(request["font"], request.get("axes", {}))
    size = request["size"]
    scale = size / upem
    track = request.get("tracking", 0) * size
    digits = 1 if size >= 30 else 2
    pen = SVGPathPen(glyphs, ntos=lambda v: (f"%.{digits}f" % v).rstrip("0").rstrip("."))
    x = 0.0
    for ch in request["text"]:
        name = cmap.get(ord(ch))
        if name is None:
            continue
        # y is flipped: font units point up, SVG down
        glyphs[name].draw(TransformPen(pen, (scale, 0, 0, -scale, x, 0)))
        x += font["hmtx"][name][0] * scale + track
    return {"d": pen.getCommands(), "width": round(x - track, 2)}


json.dump([outline(r) for r in json.load(sys.stdin)], sys.stdout)
