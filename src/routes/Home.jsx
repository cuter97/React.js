import ItemListContainer from '../components/ItemListContainer';

const Home = () => {

    return (
        <>
            <div className='fs-2 text-center p-5'>
                Home
            </div>
            <div className="text-center p-5">
                    <ItemListContainer/>
            </div>
        </>
    )
}

export default Home