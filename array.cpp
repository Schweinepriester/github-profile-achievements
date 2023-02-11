#include <iostream>
using namespace std;

int main()
{
    int numbers[5] = {7, 5, 6, 12, 35};
    cout <<" Numbers are = ";

    //Printing the values of array using for loop

    for(int i = 0; i <5; i++){
        cout<<numbers[i]<<" ";
    }
    
    return 0;
}


//Taking Inputs from the users & storing them in an array

#include <iostream>
using namespace std;

int main()
{
    int numArray[5];
    cout<<"Enter 5 numbers"<<endl;

    //Storing input from the users to array
    for(int i=0; i<5; i++){
        cin>>numArray[i];
    }    
    
    cout<<"The numbers are : ";

    //Printing the array elements

    for(int j = 0; j<5; j++){
        cout<<numArray[j]<<" ";
    }

    return 0;
}

