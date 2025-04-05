
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Mock user data for demonstration
const MOCK_USER_DATA = [
  { id: "1", name: "John Doe", email: "john@example.com", bloodType: "A+", lastDonation: "2024-03-15", donations: 5 },
  { id: "2", name: "Jane Smith", email: "jane@example.com", bloodType: "O-", lastDonation: "2024-02-20", donations: 8 },
  { id: "3", name: "Michael Johnson", email: "michael@example.com", bloodType: "B+", lastDonation: "2024-03-05", donations: 3 },
  { id: "4", name: "Emily Davis", email: "emily@example.com", bloodType: "AB+", lastDonation: "2024-01-30", donations: 2 },
  { id: "5", name: "Robert Wilson", email: "robert@example.com", bloodType: "A-", lastDonation: "2024-03-10", donations: 7 },
  { id: "6", name: "Sarah Brown", email: "sarah@example.com", bloodType: "O+", lastDonation: "2024-02-28", donations: 4 },
  { id: "7", name: "David Miller", email: "david@example.com", bloodType: "B-", lastDonation: "2024-01-15", donations: 6 },
  { id: "8", name: "Jennifer Taylor", email: "jennifer@example.com", bloodType: "AB-", lastDonation: "2024-03-01", donations: 1 },
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
          {MOCK_USER_DATA.map((user) => (
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
