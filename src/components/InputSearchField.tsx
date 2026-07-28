'use client'


const InputSearchField = () => {

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const searchQuery = formData.get('search') as string;
            console.log('Search Query:', searchQuery);
      };

      return (
            <div className="mt-10">
                  <form onSubmit={handleSubmit}>
                        <input type="text" name="search" id="search" placeholder="Search food..." className="px-2 py-3 border-2 max-w-xl rounded-2xl"/>
                        <button type="submit" className="px-3 py-3 bg-green-500 text-white rounded-md ml-2 hover:bg-green-600">Search</button>
                  </form>
            </div>
      );
};

export default InputSearchField;