#https://docs.python.org/3/tutorial/datastructures.html

#Comments
"""Multiline 
Comments"""

#Strings
stringVar = " This is a string " + " connected String"
'spam eggs'  # single quotes
#'spam eggs'
'doesn\'t'  # use \' to escape the single quote...
#"doesn't"
"doesn't"  # ...or use double quotes instead
#"doesn't"
'"Yes," he said.'
#'"Yes," he said.'
"\"Yes,\" he said."
#'"Yes," he said.'
'"Isn\'t," she said.'
#'"Isn\'t," she said.'

'"Isn\'t," she said.'
#'"Isn\'t," she said.'
print('"Isn\'t," she said.')
#"Isn't," she said.
s = 'First line.\nSecond line.'  # \n means newline
s  # without print(), \n is included in the output
#'First line.\nSecond line.'
print(s)  # with print(), \n produces a new line
#First line.
#Second line.
print('C:\some\name')  # here \n means newline!
#C:\some
#ame
print(r'C:\some\name')  # note the r before the quote
#C:\some\name
text = ('Put several strings within parentheses '
           'to have them joined together.')
text
#'Put several strings within parentheses to have them joined together.'
word = 'Python'
word[0]  # character in position 0 P
word[5]  # character in position 5 n
word[-1]  # last character n
word[-2]  # second-last character o
word[-6]  #P
word[0:2]  # characters from position 0 (included) to 2 (excluded) Py
word[2:5]  # characters from position 2 (included) to 5 (excluded)  tho
word[:2] + word[2:] #Python
word[:4] + word[4:] #Python
word[:2]   # character from the beginning to position 2 (excluded) Py
word[4:]   # characters from position 4 (included) to the end on
word[-2:]  # characters from the second-last (included) to the end on
'J' + word[1:] # Jthon
s = 'supercalifragilisticexpialidocious'
len(s) # 34
"""
 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
 0   1   2   3   4   5   6
-6  -5  -4  -3  -2  -1
"""


#Boolean
booleanVarOldTrue = 1
booleanVarOldFalse = 0
booleanVarNewTrue = True
booleanVarNewFalse = False

#Number
numberVar = 1 #int
numberVarNeg = -1 #int
numberVarFloat = 1.0 #float
numberVarLong = 12345678901 #long

#operator 
2 ** 7  # 2 to the power of 7
8 / 5  # division always returns a floating point number
17 // 3  # floor division discards the fractional part
17 % 3  # the % operator returns the remainder of the division
5 * 3   # multiplication
2 + 2 
2 - 2

width = 20
height = 5 * 9
width * height

#Time https://www.tutorialspoint.com/python/python_date_time.htm
import time
timeTickVar = time.time()
timeLocalTimeVar = time.localtime(time.time())
timeLocalTimeFormattedVar = time.asctime( time.localtime(time.time()) )

#Calendar https://www.tutorialspoint.com/python/python_date_time.htm
import calendar
calVar = calendar.month(2008, 1)
print calVar

#List or Array
#Array can have array values, number, strings, or tuples
arrayVar =  [1, 4, 9, 16, 25]
arrayVar[0]  # indexing returns the item 1
arrayVar[-1] #25 
arrayVar[-3:] #[9, 16, 25]
arrayVar[:] #[1, 4, 9, 16, 25]
arrayVar + [36, 49, 64, 81, 100] #[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

cubes = [1, 8, 27, 65, 125]  # something's wrong here
4 ** 3  # the cube of 4 is 64, not 65!
cubes = [1, 8, 27, 65, 125]  # something's wrong here
4 ** 3  # the cube of 4 is 64, not 65!
cubes[3] = 64  # replace the wrong value
cubes #[1, 8, 27, 64, 125
cubes.append(216)  # add the cube of 6
cubes.append(7 ** 3)  # and the cube of 7
cubes #[1, 8, 27, 64, 125, 216, 343]

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
letters #['a', 'b', 'c', 'd', 'e', 'f', 'g']
# replace some values
letters[2:5] = ['C', 'D', 'E']
letters #['a', 'b', 'C', 'D', 'E', 'f', 'g']
# now remove them
letters[2:5] = []
letters #['a', 'b', 'f', 'g']
# clear the list by replacing all the elements with an empty list
letters[:] = []
letters #[]
letters = ['a', 'b', 'c', 'd']
len(letters) #4

a = ['a', 'b', 'c']
n = [1, 2, 3]
x = [a, n]
x #[['a', 'b', 'c'], [1, 2, 3]]
x[0] #['a', 'b', 'c']
x[0][1] #'b'


#Set - normally used for comparison between sets
#no duplicates, cannot be sorted
setVar = {1}

#Tuples
#tuples can have array values, number, strings, or tuples
tuplesVar = (1 ,3 ,2)

#Dictionaries
dictionariesVar = {'jack': 4098, 'sape': 4139}


#https://docs.python.org/3/tutorial/controlflow.html
#For Loop 
for item in arrayVar:
    if item > 1:
        print   (item)

for i, v in enumerate(arrayVar):
    print(i, v)

#While Loop 
i = len(arrayVar) - 1
while i >= 0:
    print arrayVar[i]
    i -= 1

#For Loop using Dictionaries
knights = {'gallahad': 'the pure', 'robin': 'the brave'}
for k, v in knights.items():
    print(k, v)

#Multiple Variable Assignment
a = b = c = 1
a, b, c = 1, 2, "john"

#Else if
"""
if expression : 
   suite
elif expression : 
   suite 
else : 
   suite
"""

#Function
def functionName(parameter):
    return parameter

functionNameVar = functionName('parameter test')
print functionNameVar
pass


# Fibonacci series:
# the sum of two elements defines the next
a, b = 0, 1
while b < 10:
    print(b)
    a, b = b, a+b
"""
1
1
2
3
5
8
"""

i = 256*256
print('The value of i is', i) #The value of i is 65536

a, b = 0, 1
while b < 10:
    print(b, end=',')
    a, b = b, a+b
1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,