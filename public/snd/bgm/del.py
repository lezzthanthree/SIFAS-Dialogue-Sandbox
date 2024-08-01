import os

x = os.listdir()

for file in x:
    if "wav" in file:
        os.remove(file)