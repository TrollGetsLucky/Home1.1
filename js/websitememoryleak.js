class MemorableClass {
    static final ArrayList list = new ArrayList(100);
}
Calling String.intern() on lengthy String
String str=readString(); // read lengthy string any source db,textbox/jsp etc..
// This will place the string in memory pool from which you cant remove
str.intern();
(Unclosed) open streams ( file , network etc... )
try {
    BufferedReader br = new BufferedReader(new FileReader(inputFile));
    ...
    ...
} catch (Exception e) {
    e.printStacktrace();
}
Unclosed connections
try {
    Connection conn = ConnectionFactory.getConnection();
    ...
    ...
} catch (Exception e) {
    e.printStacktrace();
}
