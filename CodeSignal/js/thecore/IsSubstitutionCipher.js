const solution = (string1, string2) => [...string1].every((v,i) => string1.indexOf(v) === string2.indexOf(string2[i]));
