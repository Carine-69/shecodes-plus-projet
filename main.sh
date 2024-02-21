#!/bin/bash

# Function to create a student record
create_student_record() {
    # Prompt user for student details
    read -p "Enter student email: " email
    read -p "Enter student age: " age
    read -p "Enter student ID: " student_id

    # Save student record to file
    echo "$email, $age, $student_id" >> Students-list_1023.txt
}

# Function to save student record to file
save_student_record() {
    # Write student record to file
    echo "$1" >> Students-list_1023.txt
}

# Function to view all students
view_all_students() {
    # Display contents of Students-list_1023.txt
    cat Students-list_1023.txt
}

# Function to delete a student record
delete_student_record() {
    # Prompt user for student ID to delete
    read -p "Enter student ID to delete: " student_id
    # Delete student record from file
    sed -i "/^$student_id/d" Students-list_1023.txt
}

# Function to update a student record
update_student_record() {
    # Prompt user for student ID to update
    read -p "Enter student ID to update: " student_id
    
    # see if Id exits
    if grep -q "^$student_id""student-list_1023.txt; then
    # Prompt user for new student details
    read -p "Enter new student ID" new_id
    read -p "Enter new student email: " new_email
    read -p "Enter new student age: " new_age
    # Update student record in file
    sed -i "s/^$student_id,.*/$new_email, $new_age, $new_id/" Students-list_1023.txt
}

# Main menu loop
while true; do
    echo "1. Create Student Record"
    echo "2. View All Students"
    echo "3. Delete Student Record"
    echo "4. Update Student Record"
    echo "5. Exit"

    read -p "Enter your choice: " choice

    case $choice in
        1) create_student_record ;;
        2) view_all_students ;;
        3) delete_student_record ;;
        4) update_student_record ;;
        5) exit ;;
        *) echo "Invalid choice. Please try again." ;;
    esac
done
