import { useCallback, useState } from 'react'
import BreadCrumb from '../../../components/breadCrumb/BreadCrumb';
import { useDropzone } from 'react-dropzone';
import AddContentFile from '../../../components/addContentItem/AddContentFile';

const AddContentPage = () => {
  const [files, setFiles] = useState([])
  const onDrop = useCallback(acceptedFiles => {
    const currentFiles=files;
    currentFiles.push(acceptedFiles[0])
    setFiles(currentFiles);
  }, [])

  const removeFile=(file)=>{
    const currentFiles=files;
    const currentFileIndex=currentFiles.findIndex(item=>item===file);
    currentFiles.splice(currentFileIndex,1);
    
    setFiles(currentFiles);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <div className='h-[calc(100dvh-80px)] overflow-y-scroll box-border p-4 w-full md:p-8 bg-primaryBackground'>
      <BreadCrumb />
      <form className='border my-4 w-full bg-white rounded-lg p-4 px-5'>
        <h1 className='font-bold text-xl'>Add Content</h1>
        <hr className='my-3' />
        <div className='flex flex-wrap gap-8'>
          <div className='space-y-2 w-full md:w-2/5 2xl:w-full 2xl:max-w-[500px]'>
            <label htmlFor="title" className='block'>Title</label>
            <input type="text" id='title' placeholder='Title' className='bg-inputBox px-2 py-3 rounded-md w-full' />
          </div>
          <div className='space-y-2 w-full md:w-2/5 2xl:w-full 2xl:max-w-[500px]'>
            <label htmlFor="url" className='block'>URL</label>
            <input type="text" id='url' placeholder='write here' className='bg-inputBox px-2 py-3 rounded-md w-full' />
          </div>
        </div>
        <div className='flex flex-wrap my-5 gap-2'>
          {

            files && files.map(
              (item,index) => <AddContentFile key={index} item={item} removeFile={removeFile}/>)
          }
          <div {...getRootProps()} className='flex-shrink-0 w-full max-w-[330px] h-[185px]'>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <div className='w-full h-full flex-shrink-0 flex flex-col justify-center items-center gap-3 bg-[#f3f3f3] text-sm text-neutral-700 aspect-video rounded-lg'>
                  Drop Files here to Upload..
                  <p className='text-sm p-2 rounded-xl w-fit bg-inputBox text-neutral-900 font-bold'>Browse files</p>
                </div>
            }
          </div>
        </div>
      </form>




    </div>
  )
}

export default AddContentPage
