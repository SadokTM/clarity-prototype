import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Baby } from 'lucide-react';

export default function Auth() {
  const { signIn, signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await signIn(email, password);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Velkommen Tilbake!');
    }

    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;

    const { error } = await signUp(email, password, fullName);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Konto opprettet! Logger inn...');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-blurred"
        style={{
          backgroundImage: "url('sunshine.jpg')",
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          backgroundBlendMode: 'overlay',
        }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-70 animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-success/20 rounded-full blur-[80px] opacity-50 animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <Card className="w-full max-w-md glass relative z-10">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mb-2 shadow-glow">
            <Baby className="w-10 h-10 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
            Krysselista
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Sikker og enkel henting fra barnehagen
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 glass">
              <TabsTrigger value="signin" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
                Logg inn
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
                Registrer
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email" className="text-base font-semibold">E-post</Label>
                  <Input
                    id="signin-email"
                    name="email"
                    type="email"
                    placeholder="deg@eksempel.no"
                    required
                    className="glass border-white/20 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password" className="text-foreground font-medium">Passord</Label>
                  <Input
                    id="signin-password"
                    name="password"
                    type="password"
                    required
                    className="glass border-white/20 focus:border-primary/50"
                  />
                </div>
                <Button type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow text-lg h-12 hover:scale-[1.03] transition-all" disabled={isLoading}>
                  {isLoading ? 'Logger inn...' : 'Logg inn'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="text-foreground font-medium">Fullt navn</Label>
                  <Input
                    id="signup-name"
                    name="fullName"
                    type="text"
                    placeholder="Ola Nordmann"
                    required
                    className="glass border-white/20 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-foreground font-medium">E-post</Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="deg@eksempel.no"
                    required
                    className="glass border-white/20 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-foreground font-medium">Passord</Label>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    required
                    className="glass border-white/20 focus:border-primary/50"
                  />
                </div>

                <div className="glass p-3 rounded-xl border border-white/20 text-base text-muted-foreground">
                  <p>Du registreres som <span className="font-semibold text-foreground">forelder</span>.</p>
                  <p className="text-xs mt-1">Kontakt administrator hvis du trenger andre tilganger.</p>
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow text-lg h-12" disabled={isLoading}>
                  {isLoading ? 'Oppretter konto...' : 'Opprett konto'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
