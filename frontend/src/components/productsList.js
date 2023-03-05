import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'

function ProductsList() {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)

    const getAll = () => {
        return axios.get(`http://localhost:8000/api/v1/product/all?page=${page}`)
    }

    const { data, isLoading, refetch } = useQuery('allProducts', getAll, { staleTime: 0 })


    useEffect(()=>{
        if (data) {
            const total = data.data.count
            const currentPageCount = Math.ceil(total / 20)
            setPageCount(currentPageCount)
            console.log('useEffect ran')
        }
    })
    
    const changePage = (e) => {
    	const pageSelected = e.selected + 1
        setPage(pageSelected)
        refetch()
        console.log(`selected page : page ${pageSelected}`)
    }

    return (
        <>
            <div style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {isLoading && <h3>Loading...</h3>}
                {data && data.data.results.map(product => 
                    <div className="productCard">
                        <Link to={`product/${product.id}`}>
                            <div style={{ display: 'flex' , flexDirection: 'row' , justifyContent: 'center'}}>
                                <img className="productImg" src={ product.image_url }/>
                            </div>
                            <div style={{ marginTop: '8px'}}>
                                <p style={{paddingInline: '1rem', fontFamily: 'var(--fontHead)', fontSize: '14px', textAlign: 'center', height: '40px', overflow: 'hidden'}}>{ product.name }</p>
                                <p style={{fontWeight: 'bold', marginBlock: '0', textAlign: 'center'}}>${ product.price }</p>

                            </div>

                        </Link>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem'}}>
                            <button className="btnPill" data-product="{{ product.id }}" data-action="add">add
        	                    <i className="fas fa-plus"></i><i class="fas fa-shopping-cart"></i>
                        	</button>
                        </div>

                    </div>
                    
                )}
            </div>

            <ReactPaginate breakLabel={'...'} previousLabel={"prev"} nextLabel={"next"} pageCount={pageCount}
                onPageChange={changePage} pageRangeDisplayed={5} containerClassName={"paginationDiv"} previousLinkClassName={""}
                nextLinkClassName={""} disabledClassName={""} activeClassName={"paginationActive"}
                renderOnZeroPageCount={null}
            />
        </>
    )
}
export default ProductsList

