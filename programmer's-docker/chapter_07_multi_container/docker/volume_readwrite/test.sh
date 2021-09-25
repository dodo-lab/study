#!/bin/sh

echo "ping confirm"
ps -aux

echo "read-only: error check"
touch /tmp/volume_readonly/test.txt
echo "read-only: file read"
cat /tmp/volume_readonly/readonly.txt

echo "read-write: write test.txt"
touch /tmp/volume_readwrite/test.txt
