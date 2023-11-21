import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";



export default function Home() {
  function upload(ev) {
    ev.preventDefault();
    console.log(ev);
  }
  return (
    <>
      <PageHeaders 
        h1Text={'Add captions to your videos'} 
        h2Text={'Just Upload your video and we will do the rest'}
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <DemoSection />
    </>
  )
}
