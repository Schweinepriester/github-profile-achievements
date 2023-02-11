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
