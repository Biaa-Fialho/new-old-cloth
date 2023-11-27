const connection = require('../config/db');
require("dotenv").config();

async function createPost(request, response) {
    const query = 'INSERT INTO post (id_user, post_legend, post_image) VALUES (?, ?, ?)' // insere na tabela mysql
    const params = [ 
      request.body.userId,
      request.body.legend,
      request.file.filename 
  ];

    connection.query(query, params, (error, result) => {
        if(error) {
            console.log('Error to criate the post: ', error);
            return response.status(500).json({error: 'Error to criate the post'});
        }
        response.json({message: 'Success to create post', post_id: result.insertId});
    }); // valida o erro como 500 se não aparece uma mensagem de sucesso
}

async function getAllPosts(req, res) {
    const query = `
    SELECT
      post.id_post AS id_post,
      post.id_user AS id_user,
      post.post_legend AS post_legend,
      post.post_image AS post_image,
      users.user_name AS user_name
    FROM
      post
    JOIN
      users 
    ON post.id_user = users.user_id
    ORDER BY post.post_date DESC
    `; // lista todos os posts no home
  
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Erro ao recuperar os posts: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar os posts' });
      }
  
      console.log(results[0])
      res.json(results);
    });

  }


  async function getUserPost (request, response) {
    const postId = request.params.user_id;
    
    const query = `
    SELECT
    post.id_post AS id_post,
    post.id_user AS id_user,
    post.post_legend AS post_legend,
    post.post_image AS post_image
  FROM
    post
  JOIN
    users ON post.id_user = users.user_id
  WHERE
    post.id_user = ?;
    `
  
    connection.query(query, [postId], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar as informações do post: ' + error.message);
        return response.status(500).json({ error: 'Erro ao recuperar as informações do post' });
      }

      response.json(results);
    });
  }
  
  module.exports = {
      createPost,
      getAllPosts,
      getUserPost
  }