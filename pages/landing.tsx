import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      
      {/* Render the Card component */}
      <Card />
      <Card />
      <Card /> {/* Duplicate a few times to see reusability */}
    </div>
  )
}

export default Landing;
