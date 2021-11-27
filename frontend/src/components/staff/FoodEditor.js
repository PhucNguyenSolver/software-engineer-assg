import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap"
import { useEffect, useState } from "react"
import { PlusLg, Pencil, Backspace, Trash } from "react-bootstrap-icons"
import FoodService from "../../services/food.service"
import styled from "styled-components"

export default function EditPage() {
    return <div className='d-flex mt-5'>
        <FoodEditor mode='add' />
        <FoodEditor mode='edit' id={'619229f1792fa260bd3a1004'} />
    </div>
}

export function FoodEditor(props) {
    const [isShowEditor, setIsShowEditor] = useState(false)
    const openEditor = () => {
        setIsShowEditor(true)
    }

    return <div className='container px-0 my-2'>
        <Button className='btn-secondary d-flex align-items-center' onClick={openEditor}>
            {props.mode === 'add' ? 'Thêm món ăn mới' : 'Chỉnh sửa'}
            {props.mode === 'add' ? <PlusLg size={25} fontWeight={800} className='ms-1' /> : <Pencil size={16} className='ms-2' />}
        </Button>
        <Editor show={isShowEditor} onHide={() => setIsShowEditor(false)}
            mode={props.mode} id={props.id} />
    </div>
}

function Editor(props) {
    const [basicInfo, setBasicInfo] = useState({
        name: '',
        price: '',
        discount: '',
        type: '',
        description: ''
    })

    const [url, setUrl] = useState('')
    const [options, setOptions] = useState([{
        _id: '',
        name: '',
        items: [{
            name: '',
            price: ''
        }],
        isSelected: false
    }])

    const [imageUrls, setImageUrls] = useState([])
    const deleteUrl = (value) => {
        const urls = [...imageUrls]
        let idx = urls.find(url => url === value)
        urls.splice(idx, 1)
        setImageUrls(urls)
    }

    const resetState = () => {
        setBasicInfo({
            name: '',
            price: '',
            discount: '',
            type: '',
            description: ''
        })
        setImageUrls([])
    }
    const addFood = () => {
        const data = {
            ...basicInfo,
            imageUrls: imageUrls,
            optionIds: options.filter(value => value.isSelected).map(value => value._id)
        }
        FoodService.createFood(data).then(response => {
            alert(response.data.msg)
        })
        resetState()
        props.onHide()
    }
    const editFood = () => {
        const data = {
            ...basicInfo,
            imageUrls: imageUrls,
            optionIds: options.filter(value => value.isSelected).map(value => value._id)
        }
        FoodService.updateFood(props.id, data).then(response => {
            alert(response.data.msg)
            window.location.reload()
        })
        props.onHide()
    }
    const deleteFood = () => {
        let deleteConfirm = window.confirm("Are you sure about that ?")
        if(deleteConfirm) FoodService.deleteFood(props.id).then(response => {
            alert(response.data.msg)
        })
        props.onHide()
    }

    const initAddMode = () => {
        FoodService.getOptions().then(response => {
            const data = response.data
            setOptions(data.map(value => {
                return {
                    _id: value._id,
                    name: value.name,
                    items: value.items,
                    isSelected: false
                }
            }))
        }).catch(err => console.log({ msg: 'ERROR' }))
    }

    const initEditMode = () => {
        FoodService.getFoodById(props.id).then(response => {
            const foodData = response.data
            if(foodData === '') return
            setBasicInfo({
                name: foodData.name,
                price: foodData.price,
                description: foodData.description,
                discount: foodData.discount.slice(0, -1),
                type: foodData.type
            })
            setImageUrls(foodData.imageUrls)
            FoodService.getOptions().then(response => {
                const optionData = response.data
                const newOptions = optionData.map(value => {
                    return {
                        _id: value._id,
                        name: value.name,
                        items: value.items,
                        isSelected: false
                    }
                })
                newOptions.forEach(value => {
                    if(foodData.optionIds.includes(value._id)) {
                        value.isSelected = true
                    } 
                })
                console.log(newOptions)
                setOptions(newOptions)
            }).catch(err => console.log({ msg: 'ERROR' }))
        })
    }

    const init = function () {
        if (props.mode === 'add') initAddMode()
        if (props.mode === 'edit') initEditMode()
    }

    useEffect(init, [])

    return <Modal size='lg' centered {...props}>
        <Modal.Header closeButton>
            <Modal.Title>{props.mode === 'add' ? 'Thêm món ăn' : 'Chỉnh sửa món ăn'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <Form.Group className='col-12 mb-1'>
                    <Form.Label>Tên món ăn</Form.Label>
                    <Form.Control placeholder={'Food\'s name'} type='text' value={basicInfo.name}
                        onChange={e => setBasicInfo({ ...basicInfo, name: e.target.value })} />
                </Form.Group>
                <Form.Group className='col-6 mb-1'>
                    <Form.Label>Giá món ăn</Form.Label>
                    <Form.Control placeholder={'Price'} type='number' value={basicInfo.price}
                        onChange={e => setBasicInfo({ ...basicInfo, price: e.target.value })} />
                </Form.Group>
                <Form.Group className='col-6 mb-1'>
                    <Form.Label>Mức giảm giá</Form.Label>
                    <InputGroup>
                        <FormControl type='number' max={100} min={1} value={basicInfo.discount}
                            onChange={e => setBasicInfo({ ...basicInfo, discount: e.target.value })} defaultValue={0} />
                        <InputGroup.Text>%</InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group className='col-12 mb-1'>
                    <Form.Label>Link ảnh</Form.Label>
                    <Form.Control placeholder={'List of image URLs'} type='url'
                        value={url} onChange={e => setUrl(e.target.value)}
                        onKeyUp={e => {
                            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                                const newUrls = [...imageUrls, url]
                                setImageUrls(newUrls)
                                setUrl('')
                            }
                        }} />
                    <TextList list={imageUrls} deleteItem={deleteUrl} />
                </Form.Group>

                <hr />

                <div className='col-12 mb-1'>
                    <h4>Món ăn kèm</h4>
                    {options.map((option, index) => {
                        return <div>
                            <div className='d-flex align-items-center justify-content-start'>
                                <Form.Check className='me-2' checked={option.isSelected} onChange={() => {
                                    const newOpt = [...options]
                                    newOpt[index].isSelected = !option.isSelected
                                    setOptions(newOpt)
                                }} />
                                <b className='text-primary fs-6'>{option.name}</b>
                            </div>

                            {option.items.map(item => {
                                return <div className='row'>
                                    <span className='col-8'>{item.name}</span>
                                    <span className='col-3'>{item.price} vnđ</span>
                                </div>
                            })}
                        </div>
                    })}
                </div>
                <hr />

                <Form.Group className='col-12 mb-1'>
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control placeholder={'Description'} as='textarea' value={basicInfo.description}
                        onChange={e => setBasicInfo({ ...basicInfo, description: e.target.value })} />
                </Form.Group>
                <Form.Group className='col-12 mb-1'>
                    <Form.Label>Loại</Form.Label>
                    <Form.Select value={basicInfo.type}
                        onChange={e => setBasicInfo({ ...basicInfo, type: e.target.value })} >
                        <option value='Combo' selected>Combo</option>
                        <option value='Foody'>Đồ ăn</option>
                        <option value='Appetizer'>Khai vị</option>
                        <option value='Drink'>Giải khát</option>
                        <option value='Dessert'>Tráng miệng</option>
                    </Form.Select>
                </Form.Group>
            </div>
        </Modal.Body>

        <Modal.Footer className='justify-content-between'>
            <Button className={'d-flex align-items-center btn-info'}
                onClick={props.mode === 'add' ? props.onHide : deleteFood}>
                {props.mode === 'add' ? 'Huỷ bỏ' : 'Xoá'}
                {props.mode === 'add' ? <Backspace size={20} fontWeight={800} className='ms-1' />
                    : <Trash size={16} fontWeight={800} className='ms-2' />}
            </Button>
            <Button className='d-flex align-items-center'
                onClick={props.mode === 'add' ? addFood : editFood}>
                {props.mode === 'add' ? 'Thêm' : 'Chỉnh sửa'}
                {props.mode === 'add' ? <PlusLg size={20} fontWeight={800} className='ms-1' />
                    : <Pencil size={16} fontWeight={800} className='ms-2' />}
            </Button>
        </Modal.Footer>
    </Modal>
}

function TextList(props) {
    return props.list.length !== 0 ? <TList>
        {props.list.map(value => {
            return <div className='d-flex justify-content-between align-items-center' key={value.slice(10, 40)}>
                <span style={{ overflow: 'hidden', maxWidth: '89%' }}>{value}</span>
                <Trash size={16} color='black' onClick={() => props.deleteItem(value)} />
            </div>
        })}
    </TList> : <div className='p-2 mx-auto text-primary'>Empty List</div>
}

const TList = styled.div`
    border: 1px solid #ced4da;
    margin-top: 5px;
    border-radius: 0.25rem;
    div {
        padding: .5rem .75rem;
        color: blue;
        text-decoration: underline;
        border-bottom: 1px solid #ced4da;
    }
    div:last-child {
        border-bottom: none;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
`;