
import LoginForm from "@/app/ui/login-form";
export default function LoginPage() {
    return (
      <main className="flex items-center justify-center min-h-screen p-8">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <p className="text-gray-600 mb-6">Please enter your credentials.</p>
          
          <LoginForm/>
          {/* Aquí puedes importar tu formulario de login */}
          {/* Si ya tienes <LoginForm />, agrégalo aquí */}
        </div>
      </main>
    );
  }
  