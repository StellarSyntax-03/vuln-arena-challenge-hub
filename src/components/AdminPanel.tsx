import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Users, 
  Settings, 
  Database, 
  Upload, 
  Search, 
  Trash2, 
  Edit, 
  Eye,
  AlertTriangle,
  Shield,
  FileText
} from 'lucide-react';

const AdminPanel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  // Mock user data (vulnerable to enumeration)
  const users = [
    { id: 1, username: 'admin', email: 'admin@vulnhub.academy', role: 'Administrator', status: 'Active' },
    { id: 2, username: 'john_doe', email: 'john@example.com', role: 'Student', status: 'Active' },
    { id: 3, username: 'jane_smith', email: 'jane@example.com', role: 'Instructor', status: 'Suspended' },
    { id: 4, username: 'test_user', email: 'test@test.com', role: 'Student', status: 'Active' },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadFile(file);
      // Intentionally vulnerable - no file type validation
      alert(`File uploaded: ${file.name} (${file.size} bytes)`);
    }
  };

  const handleSqlQuery = (query: string) => {
    // Intentionally vulnerable SQL execution simulation
    alert(`Executing SQL: ${query}`);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center mb-2">
            <Shield className="h-8 w-8 text-primary mr-3" />
            Admin Control Panel
          </h1>
          <p className="text-muted-foreground">
            Administrative interface for VulnHub Academy
          </p>
        </div>

        {/* Warning Alert */}
        <Alert className="mb-6 border-destructive/50 bg-destructive/10">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Security Notice:</strong> This admin panel contains intentional vulnerabilities for educational purposes. 
            In a real application, this would be highly insecure!
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">
              <Users className="h-4 w-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="database">
              <Database className="h-4 w-4 mr-2" />
              Database
            </TabsTrigger>
            <TabsTrigger value="files">
              <Upload className="h-4 w-4 mr-2" />
              Files
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage user accounts and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* User Search */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1">
                    <Label htmlFor="userSearch">Search Users</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="userSearch"
                        placeholder="Search by username, email, or ID..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button className="mt-6">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>

                {/* Users Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2">ID</th>
                        <th className="text-left p-2">Username</th>
                        <th className="text-left p-2">Email</th>
                        <th className="text-left p-2">Role</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b border-border/50">
                          <td className="p-2">{user.id}</td>
                          <td className="p-2 font-medium">{user.username}</td>
                          <td className="p-2">{user.email}</td>
                          <td className="p-2">
                            <Badge variant={user.role === 'Administrator' ? 'default' : 'secondary'}>
                              {user.role}
                            </Badge>
                          </td>
                          <td className="p-2">
                            <Badge variant={user.status === 'Active' ? 'default' : 'destructive'}>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="p-2">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Database Tab */}
          <TabsContent value="database" className="space-y-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Database Console</CardTitle>
                <CardDescription>
                  Execute SQL queries directly (Extremely dangerous!)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="sqlQuery">SQL Query</Label>
                  <Textarea
                    id="sqlQuery"
                    placeholder="SELECT * FROM users WHERE..."
                    className="font-mono text-sm"
                    rows={6}
                  />
                </div>
                <Button 
                  onClick={() => handleSqlQuery('SELECT * FROM users')}
                  className="bg-gradient-danger hover:shadow-glow"
                >
                  <Database className="h-4 w-4 mr-2" />
                  Execute Query
                </Button>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Quick Queries:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="font-mono bg-background/50 p-2 rounded">
                      SELECT * FROM users;
                    </div>
                    <div className="font-mono bg-background/50 p-2 rounded">
                      SELECT username, password FROM users WHERE role='admin';
                    </div>
                    <div className="font-mono bg-background/50 p-2 rounded">
                      DROP TABLE sessions; -- Dangerous!
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Files Tab */}
          <TabsContent value="files" className="space-y-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>File Upload Manager</CardTitle>
                <CardDescription>
                  Upload and manage files (No security checks!)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="fileUpload">Upload File</Label>
                  <Input
                    id="fileUpload"
                    type="file"
                    onChange={handleFileUpload}
                    accept="*/*" // Intentionally accepts any file type
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Accepts any file type (including executables!)
                  </p>
                </div>
                
                {uploadFile && (
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Uploaded File:</h4>
                    <div className="text-sm space-y-1">
                      <div><strong>Name:</strong> {uploadFile.name}</div>
                      <div><strong>Size:</strong> {uploadFile.size} bytes</div>
                      <div><strong>Type:</strong> {uploadFile.type || 'Unknown'}</div>
                    </div>
                  </div>
                )}

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Vulnerability Notes:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• No file type restrictions</li>
                    <li>• No file size limits</li>
                    <li>• Files stored in web-accessible directory</li>
                    <li>• No virus scanning</li>
                    <li>• Executable files allowed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>
                  Configure system settings and security parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="debugMode">Debug Mode</Label>
                    <select className="w-full p-2 border border-border rounded-md bg-background">
                      <option value="enabled">Enabled (Shows stack traces)</option>
                      <option value="disabled">Disabled</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="sessionTimeout">Session Timeout</Label>
                    <Input id="sessionTimeout" defaultValue="never" />
                  </div>
                  
                  <div>
                    <Label htmlFor="passwordPolicy">Password Policy</Label>
                    <select className="w-full p-2 border border-border rounded-md bg-background">
                      <option value="none">No Requirements</option>
                      <option value="weak">Weak (6+ characters)</option>
                      <option value="strong">Strong</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="encryption">Data Encryption</Label>
                    <select className="w-full p-2 border border-border rounded-md bg-background">
                      <option value="none">None (Plain text)</option>
                      <option value="md5">MD5 (Weak)</option>
                      <option value="bcrypt">bcrypt</option>
                    </select>
                  </div>
                </div>
                
                <Button className="bg-gradient-cyber hover:shadow-glow">
                  <Settings className="h-4 w-4 mr-2" />
                  Save Configuration
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;