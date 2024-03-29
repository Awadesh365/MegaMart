import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'
const Search = () => {

    const navigate = useNavigate();
    const handleSubmit = (ev) => {
        ev.preventDefault();
        let query = ev.target[0].value.toLowerCase()
        if (query.trim() === "") {
            return;
        }
        navigate(`/search/?query=${query}`)

    }

    return (
        <div className="w-36 md:w-72 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center gap-2">
                <Input label="Search Products" />
                <Button type="submit" className="mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </Button>
            </form>
        </div>
    )
}
export default Search