export function InputBox({label ,type ,  onChange}) {
    return <div>
       <div className="mb-4">
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input type={type} onChange={onChange}  className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded"/>
  </div>
    </div>
}