from numpy import sign
from math import trunc

_mod = lambda a, b: a - (b * int(a/b))

def uchar(num):
  return 256 - _mod(abs(num), 256) if (sign(num) == -1) else _mod(abs(num), 256)
  
def char(num):
  return (_mod(num,128)) + (0 if (trunc((num/128))%2 == 0) else (-128 if sign(num)==1 else 128))
