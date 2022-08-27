import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
public class Solution {
    public static void main(String[] args) {
       Scanner in=new Scanner(System.in);
        int n=in.nextInt();
        String s=in.next();
        String res="";
        for(int i=0;i<26;i++){
            for(int j=i+1;j<26;j++){
                char a=(char)('a'+i);
                char b=(char)('a'+j);
                String cur="";
                for(int k=0;k<n;k++){
                    if (s.charAt(k)==a || s.charAt(k)==b) {
                        cur+=s.charAt(k);
                    }
                }
                if (cur.length()<res.length()) continue;
                if (isGood(cur)) res=cur;
            }
        }
        System.out.println(res.length());
    }
    public static boolean isGood(String s){
        if (s.length()==1) return false;
        for(int i=1;i<s.length();i++){
            if (s.charAt(i)==s.charAt(i-1)) return false;
        }
        return true;
    }
}
