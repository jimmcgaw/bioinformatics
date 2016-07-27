[![Build Status](https://travis-ci.org/jimmcgaw/bioinformatics.svg?branch=master)](https://travis-ci.org/jimmcgaw/bioinformatics)

# Bioinformatics Algorithms in JavaScript

The field of bioinformatics has a series of algorithms which are specific to the domain. This is a collection
of some basic implementations of these algorithms and their data structures in JavaScript.

Source code exists in src/, in ES6, transcompiled by babel into ES5 classes in the dist/ directory.

Caveat: this will be under active development, so expect changes. Also, I'm developing this repo for my
own learning of bioinformatics algorithms, not to create the most performant bioinformatic library in history.
While I'm mindful of space efficiency and run-time performance issues, optimizing for either is not my
priority here. Consider yourself warned. :)

## Installation

``` $ npm install --save bioinformatics ```

# Molecular Biology

Bioinformatics algorithms are largely string algorithm operations that are performed on strings of nucleotides.
For those who remember genetics, the alphabet of Deoxyribonucleic Acid (DNA) is A (adenine), C (cytosine),
G (guanine), and T (thymine). In Ribonucleic Acid (RNA), T is substituted for U (uracil). DNA is structured as
the iconic double-stranded helix; A is always bonded with T by 2 hydrogen bonds, and C with G by 3 hydrogen bonds.
That means if one side of the helix is "ATTGCC", the complementary strand opposite it will be "TAACGG".

## Sequence and Alphabet Objects

So, here's basic usage of the `Sequence` object (ES6 syntax shown):

``` import { Sequence, DNAAlphabet, RNAAlphabet } from 'bioinformatics'; ```

``` let seq = new Sequence('ATTGCC'); ```

or

``` let seq = new Sequence('ATTGCC', DNAAlphabet);  // DNAAlphabet is the default if not specified ```

``` seq.complement();
  => 'TAACGG' ```

The central dogma of molecular biology is that DNA goes to RNA goes to protein. You are a eukaryotic organism,
so your DNA exists in the nucleus of the cells in your body. In order to make a protein that becomes a piece of
you, an enzyme called RNA polymerase facilitates the creation of a messenger RNA strand copied from a section
of your DNA. This process of copying the DNA to mRNA is called <em>transcription</em>. Sequences support this:

``` let seq = new Sequence('ATTGCC'); ```

``` let transcribed = seq.transcribe(); ```

This returns a new Sequence object using the RNAAlphabet. (Remember that in going from DNA to RNA, we
s/T/U/g in the sequence.)

``` transcribed.sequence
  => 'AUUGCC' ```

Viruses usually contain RNA instead of DNA contained in a nucleus. Sometimes the RNA manipulates the DNA in
other organisms. For example, the HIV virus alters DNA in human cells via RNA injected into the cells. In the
dogma, DNA -> RNA. This process is the reverse. This is the reason that HIV is called a <em>retrovirus</em>.
(HIV is often treated by chemicals that inhibit the reverse transcriptase enzymes.)

``` let seq = new Sequence('AUUGCC', RNAAlphabet); ```

``` let retrotranscribed = seq.retrotranscribe(); ```

``` retrotranscribed.sequence
  => 'ATTGCC' ```

Trying to `transcribe` an RNA sequence or `retrotranscribe` a DNA sequence will result in a `TypeError` being
thrown.
