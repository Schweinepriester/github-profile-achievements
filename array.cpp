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

#include <iostream>
using namespace std;

// Function to find the maximum element in the array
int findMax(int arr[], int n) {
    int max = arr[0]; // Initialize max with the first element in the array
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) { // If the current element is greater than max
            max = arr[i]; // Update max with the current element
        }
    }
    return max; // Return the maximum element in the array
}

int main() {
    int arr[] = {1, 2, 3, 4, 5}; // Array of integers
    int n = sizeof(arr)/sizeof(arr[0]); // Calculate the number of elements in the array
    cout << "The maximum element is: " << findMax(arr, n) << endl; // Print the maximum element
    return 0;
}
