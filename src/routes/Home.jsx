import ItemList from '../components/ItemList';
const Home = () => {
    return (
        <>
            <div className='fs-2 text-center p-5'>
                Home
            </div>
            <div className="text-center p-5">
                    <ItemList/>
            </div>
        </>
    )
}

export default Home