import { Image, Sparkles, Download } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuth } from '@clerk/clerk-react'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL as string;

const GenerateImages: React.FC = () => {

  const imageStyle: string[] = ['Realistic style', 'Ghibli Style', 'Anime style', 'Cartoon style', 'Fantasy style', '3D style', 'Potrait style']
  
  const [selectedStyle, setSelectedStyle] = useState<string>('Realistic style')
  const [input, setInput] = useState<string>('')
  const [publish, setPublish] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean>(false)
  const [content, setContent] = useState<string>('')

  const { getToken } = useAuth()

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true)

      const prompt = `Generate an image of ${input} in the style ${selectedStyle}`
      const token = await getToken()

      const { data } = await axios.post('/api/ai/generate-image', { prompt, publish }, {
        headers: { Authorization: `Bearer ${token}` }
      })

      if (data.success) {
        console.log("Image API Response:", data);
        setContent(data.secure_url)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('An unknown error occurred')
      }
    }
    setLoading(false)
  }

  const downloadImage = async () => {
    try {
      const response = await fetch(content);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `generated-image-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success('Image downloaded successfully');
    } catch {
      toast.error('Failed to download image')
    }
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* left column */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#00AD25]'/>
          <h1 className='text-xl font-semibold'>AI Image Generator</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Describe Your Image</p>
        <textarea 
          onChange={(e) => setInput(e.target.value)} 
          value={input} 
          rows={4} 
          className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' 
          placeholder='Describe what you want to see in the image...' 
          required
        />
        <p className='mt-4 text-sm font-medium'>Style</p>
        <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
          {imageStyle.map((item) => (
            <span 
              onClick={() => setSelectedStyle(item)} 
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedStyle === item ? 'bg-green-50 text-green-700' : 'text-gray-500 border-gray-300'}`} 
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <div className='my-6 flex items-center gap-2'>
          <label className='relative cursor-pointer'>
            <input 
              type='checkbox' 
              onChange={(e) => setPublish(e.target.checked)} 
              checked={publish} 
              className='sr-only peer'
            />
            <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>
            <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>
          </label>
          <p className='text-sm'>Make this image public</p>
        </div>
        <button 
          disabled={loading} 
          className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'
        >
          {loading ? 
            <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span> 
            : 
            <Image className='w-5'/>
          }
          Generate Image
        </button>
      </form>
      
      {/* right column */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3'>
          <Image className='w-5 h-5 text-[#00AD25]'/>
          <h1 className='text-xl font-semibold'>Generated Image</h1>
        </div>
        {!content ? (
          <div className='flex-1 flex justify-center items-center'>
            <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
              <Image className='w-9 h-9'/>
              <p>Enter your topic and click "Generate Image" to see magic</p>
            </div>
          </div>
        ) : (
          <div className='mt-3 h-full flex flex-col'>
            <img src={content} alt="Generated" className='w-full flex-1 object-contain'/>
            <button 
              onClick={downloadImage} 
              className='mt-4 w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 text-sm rounded-lg cursor-pointer hover:from-green-600 hover:to-green-700 transition-all'
            >
              <Download className='w-4 h-4'/>
              Download Image
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default GenerateImages
