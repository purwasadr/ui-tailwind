import { ButtonSection } from '@/components';
import CheckboxSection from '@/components/section/CheckboxSection';
import InputSection from '@/components/section/InputSection';
import RadioSection from '@/components/section/RadioSection';
import UploadPhotoSection from '@/components/section/UploadPhotoSection';

export default function Home() {
  return (
    <>
      <div className="flex [&>*]:flex-1">   
        <ButtonSection />
        <InputSection />
        <CheckboxSection />
      </div>
      <div className="flex [&>*]:flex-1">   
        <RadioSection />
        <UploadPhotoSection />
      </div>
      <div className="h-[500px]"></div>
    </>
  )
}
