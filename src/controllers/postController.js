const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.userId; // From auth middleware

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: userId,
      },
    });

    res.status(201).json({ message: 'Post created', post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
