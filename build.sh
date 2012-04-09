#!/bin/sh
export DONT_RANK=1
game-rank
~/sbin/org2blog.rkt
time rake generate
