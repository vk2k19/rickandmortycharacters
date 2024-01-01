'use client'
import NextLink from "next/link";

export const Link = ({ href, label }) => (
    <>
      <NextLink href={href} className="anchor" data-testid="anchor">
        {label}
      </NextLink>
      <style jsx>
        {`
          .anchor {
            border: 1px solid black;
            padding: 4px 8px;
            margin: 8px;
          }
        `}
      </style>
    </>
);