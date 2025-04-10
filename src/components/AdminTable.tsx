
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// User data with Indian names
const USER_DATA = [
  { id: "1", name: "Rajesh Kumar", email: "rajesh@gmail.com", bloodType: "A+", lastDonation: "2024-03-15", donations: 5 },
  { id: "2", name: "Priya Sharma", email: "priya@gmail.com", bloodType: "O-", lastDonation: "2024-02-20", donations: 8 },
  { id: "3", name: "Amit Patel", email: "amit@outlook.com", bloodType: "B+", lastDonation: "2024-03-05", donations: 3 },
  { id: "4", name: "Sonia Singh", email: "sonia@yahoo.com", bloodType: "AB+", lastDonation: "2024-01-30", donations: 2 },
  { id: "5", name: "Vikram Reddy", email: "vikram@gmail.com", bloodType: "A-", lastDonation: "2024-03-10", donations: 7 },
  { id: "6", name: "Neha Verma", email: "neha@outlook.com", bloodType: "O+", lastDonation: "2024-02-28", donations: 4 },
  { id: "7", name: "Rahul Khanna", email: "rahul@gmail.com", bloodType: "B-", lastDonation: "2024-01-15", donations: 6 },
  { id: "8", name: "Anjali Desai", email: "anjali@yahoo.com", bloodType: "AB-", lastDonation: "2024-03-01", donations: 1 },
  { id: "9", name: "Suresh Menon", email: "suresh@gmail.com", bloodType: "O+", lastDonation: "2024-02-05", donations: 9 },
  { id: "10", name: "Divya Malhotra", email: "divya@outlook.com", bloodType: "A+", lastDonation: "2024-03-12", donations: 3 },
  { id: "11", name: "Arjun Nair", email: "arjun@gmail.com", bloodType: "B+", lastDonation: "2024-01-25", donations: 5 },
  { id: "12", name: "Meera Iyer", email: "meera@yahoo.com", bloodType: "AB+", lastDonation: "2024-02-18", donations: 2 },
  { id: "13", name: "Vivek Joshi", email: "vivek@gmail.com", bloodType: "O-", lastDonation: "2024-03-08", donations: 7 },
  { id: "14", name: "Kavita Rao", email: "kavita@outlook.com", bloodType: "A-", lastDonation: "2024-01-20", donations: 4 },
  { id: "15", name: "Prakash Gupta", email: "prakash@gmail.com", bloodType: "B-", lastDonation: "2024-02-22", donations: 6 },
];

const AdminTable = () => {
  return (
    <div className="rounded-md border bg-white shadow-sm">
      <Table>
        <TableCaption>User Registration Data</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Blood Type</TableHead>
            <TableHead>Last Donation</TableHead>
            <TableHead className="text-right">Total Donations</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {USER_DATA.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.bloodType}</TableCell>
              <TableCell>{new Date(user.lastDonation).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">{user.donations}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminTable;
