import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
    <div className="container flex w-full min-h-screen flex-col justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Hello World</CardTitle>
          <CardDescription>Submission Proyek Membangun CI/CD Pipeline dengan Jenkins</CardDescription>
        </CardHeader>
        <CardContent>
          
        </CardContent>
        <CardFooter className="flex justify-end">
          ardi_supriyadi
        </CardFooter>
      </Card>
    </div>
  )
}

export default App