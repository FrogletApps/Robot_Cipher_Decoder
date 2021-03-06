function decode(){
	var cipher = document.getElementById("cipher").value;
	var cipherStore = cipher.split("");
	var resultStore = [];
	var errorStore = [];
	for (i=0; i<cipherStore.length; i++){
		switch(cipherStore[i]){
			case "]":resultStore[i]="a";break;
			case "^":resultStore[i]="b";break;
			case "_":resultStore[i]="c";break;
			case "X":resultStore[i]="d";break;
			case "Y":resultStore[i]="e";break;
			case "Z":resultStore[i]="f";break;
			case "[":resultStore[i]="g";break;
			case "T":resultStore[i]="h";break;
			case "U":resultStore[i]="i";break;
			case "V":resultStore[i]="j";break;
			case "W":resultStore[i]="k";break;
			case "P":resultStore[i]="l";break;
			case "Q":resultStore[i]="m";break;
			case "R":resultStore[i]="n";break;
			case "S":resultStore[i]="o";break;
			case "L":resultStore[i]="p";break;
			case "M":resultStore[i]="q";break;
			case "N":resultStore[i]="r";break;
			case "O":resultStore[i]="s";break;
			case "H":resultStore[i]="t";break;
			case "I":resultStore[i]="u";break;
			case "J":resultStore[i]="v";break;
			case "K":resultStore[i]="w";break;
			case "D":resultStore[i]="x";break;
			case "E":resultStore[i]="y";break;
			case "F":resultStore[i]="z";break;
			case "}":resultStore[i]="A";break;
			case "~":resultStore[i]="B";break;
			case ".":resultStore[i]="C";break;
			case "x":resultStore[i]="D";break;
			case "y":resultStore[i]="E";break;
			case "z":resultStore[i]="F";break;
			case "{":resultStore[i]="G";break;
			case "t":resultStore[i]="H";break;
			case "u":resultStore[i]="I";break;
			case "v":resultStore[i]="J";break;
			case "w":resultStore[i]="K";break;
			case "p":resultStore[i]="L";break;
			case "q":resultStore[i]="M";break;
			case "r":resultStore[i]="N";break;
			case "s":resultStore[i]="O";break;
			case "l":resultStore[i]="P";break;
			case "m":resultStore[i]="Q";break;
			case "n":resultStore[i]="R";break;
			case "o":resultStore[i]="S";break;
			case "h":resultStore[i]="T";break;
			case "i":resultStore[i]="U";break;
			case "j":resultStore[i]="V";break;
			case "k":resultStore[i]="W";break;
			case "d":resultStore[i]="X";break;
			case "e":resultStore[i]="Y";break;
			case "f":resultStore[i]="Z";break;								
			default:
				errorStore.push(i);
			break;
		}
	}
	if (errorStore.length>1){
		document.getElementById("output").innerHTML = "The characters at positions "+errorStore.toString()+" are invalid (first character is 0)";
	}
	else if (errorStore.length==1){
		document.getElementById("output").innerHTML = "The character at position "+errorStore.toString()+" is invalid (first character is 0)";
	}
	else{
		document.getElementById("output").innerHTML = "The password is: " + resultStore.join("");
	}
}