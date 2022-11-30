import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Stack,
    StackDivider,
  } from "@chakra-ui/react";
import React from "react";
import { getPosts } from "../lib/api";

export default function BlogCard({ posts }) {
    return (
        <React.Fragment>
{posts?.map((post, index) => (
        <Card key={index} maxW="xs" textAlign="center" p={15}>
              <CardHeader>
                <Heading size="md">{post.node.title}</Heading>
              </CardHeader>
              <CardBody fontSize='sm'
                dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                />
              <CardFooter>
                <Text fontSize='xs'>
                Ditulis oleh {post.node.author.node.name}
                </Text>
                </CardFooter>
            </Card>
          ))}
        </React.Fragment>
    )
}

export async function getServerSideProps(ctx) {
    let posts = await getPosts();
    return {
      props: {
        posts,
      },
    };
  }

  