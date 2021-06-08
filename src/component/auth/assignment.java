import java.util.*;


class assignment
{

		 private static Set<String> dictionary = new HashSet<>();

		 public static void main(String []args)
 {


 	 String temp_dictionary[] = {"band, turban, bank, distance"};

	 for (String temp :temp_dictionary)
	 {
	 dictionary.add(temp);
	 }

		 System.out.println(originalstring("band cannot be generated from disturbance")); 
		 System.out.println(originalstring("turban cannot be generated from disturbance"));
		 System.out.println(originalstring("bank cannot be generated from disturbance"));
		 System.out.println(originalstring("distance cannot be generated from disturbance"));
 }

 public static boolean assignment(String word)
 {
 int size = word.length();

 if (size == 0)
 return true;

 for (int i = 1; i <= size; i++)
 {


 if (dictionary.contains(word.substring(0,i)) &&
 originalstring(word.substring(i,size)))
 return true;
 }
 return false; 
 }
}