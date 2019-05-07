import app from './app'
import { post as createPost, put as updatePost, remove as deletePost, getOne as getPost, getAll as getPosts } from "./controllers/post";
import { post as createCategory, put as updateCategory, remove as deleteCategory, getOne as getCategory, getAll as getCategories } from "./controllers/category";
import { post as createUserRol, put as updateUserRol, remove as deleteUserRol, getOne as getUserRol, getAll as getUserRoles } from "./controllers/userRoles";
import { post as createUser, put as updateUser, remove as deleteUser, getOne as getUser, getAll as getUsers } from "./controllers/user";

app.get('/', (req, res) => {
    res.send({
        "liu": "Laureate International Universities"
    })
});

app.post('/category', createCategory);
app.get('/category', getCategories);
app.get('/category/:id', getCategory);
app.put('/category/:id', updateCategory);
app.delete('/category/:id', deleteCategory);

app.post('/post', createPost);
app.get('/post', getPosts);
app.get('/post/:id', getPost);
app.put('/post/:id', updatePost);
app.delete('/post/:id', deletePost);

app.post('/userRol', createUserRol);
app.get('/userRol', getUserRoles);
app.get('/userRol/:id', getUserRol);
app.put('/userRol/:id', updateUserRol);
app.delete('/userRol/:id', deleteUserRol);

app.post('/user', createUser);
app.get('/user', getUsers);
app.get('/user/:id', getUser);
app.put('/user/:id', updateUser);
app.delete('/user/:id', deleteUser);
