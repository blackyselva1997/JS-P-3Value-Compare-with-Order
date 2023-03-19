let A = Number(prompt("Enter Your Age"));
let B = Number(prompt("Enter Your Age"));
let C = Number(prompt("Enter Your Age"));

if (A && B && C) {
    if (A > B && A < C) {
        document.write("B is smallest than - C is Gerater than");
    } else if (B > A && B < C) {
        document.write("A is smallest than - C is greater than");
    } else if (C > A && C < B) {
        document.write("A is smallest than - B is greater than");
    } else if (A > C && A < B) {
        document.write("C is Smallest than - B is Greater than");
    } else if (B > C && B < A) {
        document.write("C is smallest than - A is Greater than");
    } else if (C > B && C < A) {
        document.write("B is smallest than - A is Greater than")
    } else {
        document.write("nothing");
    }
}