#!/usr/bin/env python3

import argparse
import html_generator

def main():
    """main"""
    parser = argparse.ArgumentParser(description="Auto-generator for rule-reference")
    parser.add_argument("input", nargs='?', type=argparse.FileType('r', encoding='utf-8'),
                        help="path of original html")
    parser.add_argument("output", nargs='?', type=argparse.FileType('w', encoding='utf-8'),
                        default="output.html", help="path of processed html")
    parser.add_argument("--raw", action='store_true',
                        help="when you convert raw RR")
    parser.add_argument("-r", "--rr", type=str, default=None,
                        help="path of rr")
    parser.add_argument("-f", "--faq", type=str, default=None,
                        help="path of faq")
    # parser.add_argument("-s", "--css", type=str, default=None,
    #                     help="path of symbol for css")
    args = parser.parse_args()
    if args.raw:
        link_gen = html_generator.LinkGeneratorRaw(args.input)
    else:
        link_gen = html_generator.LinkGenerator(args.input, args.rr, args.faq)
    symbol_gen = html_generator.SymbolGenerator()
    html_generator.generate(args.input, args.output, link_gen, symbol_gen)

main()
