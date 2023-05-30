import axios from 'axios'
import React from 'react'

function Post() {

    const token = JSON.parse(localStorage.getItem("token"))

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        axios.post("http://localhost:8000/post/upload/", form, {
            headers: {
                Authorization: `Bearer ${token.access}`
            }
        })
            .then((res) => {
               console.log(res)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="post w-75 m-auto">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div class="mb-3">
                    <label for="" class="form-label">title</label>
                    <input type="text" class="form-control" name="title" />
                </div>

                <div class="mb-3">
                    <label for="" class="form-label"></label>
                    <textarea name="body" class="form-control" id="" rows="3"></textarea>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">Choose file</label>
                    <input name="image" type="file" class="form-control" id="" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Post