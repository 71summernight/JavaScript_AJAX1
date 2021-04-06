package javaproject;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class Ex20210405 {

	public static void main(String[] args) {
		ArrayList list=new ArrayList();
		list.add("1");
		list.add("2");
		list.add("3");
		list.add("4");
		list.add("5");
		System.out.println(list);		
		
		Iterator it=list.iterator();
		
		
		while(it.hasNext()) {
			Object obj=it.next();
			System.out.println(obj
					);
					
		}
		
		while(it.hasNext()) {
			Object obj=it.next();
			System.out.println(obj
					);
					
		}
		
		Set	set=new HashSet();	
		
		for(int i=0;set.size()<6;i++) {
			int num=(int)(Math.random()*45)+1;
			set.add(num);
		}
		List list1 =new LinkedList(set);
		Collections.sort(list1);
		System.out.println(list1);
		
		}
		
	
	

}