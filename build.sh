#!/bin/sh
cd ~/Dev/scm/blogs/mechakunex.github.com
export DONT_RANK=1

game-rank && \
~/sbin/org2blog.rkt && \
time rake generate && \
rake deploy && \
git add . && \
git commit -m . . && \
git push origin source