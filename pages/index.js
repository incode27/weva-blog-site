import Head from "next/head";
import Link from "next/link";
import MobileCall from "../components/MobileCall";
import BlogCard from "../components/BlogCard";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { getPosts } from "../lib/api";
import FixedBars from "../components/FixedBar";
import Toolbar from "../components/Toolbar";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import MediaSocial from "../components/MediaSocial";
import Marketplace from "../components/Marketplace";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Weva Textile Blog</title>
      </Head>
      <div>
        <FixedBars />
        <Toolbar />
        <NavMenu />
        <Box px={25}>
          <Marketplace />
          <MediaSocial />
          <main>
            {/* <BlogCard /> */}
            <Box padding={6}>
              <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              >
                {posts.map((post, index) => (
                  <Card key={index} maxW="xs" textAlign="center" p={15}>
                    <CardHeader>
                      <Heading size="md">{post.node.title}</Heading>
                    </CardHeader>
                    <CardBody
                      fontSize="xs"
                      dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                    />
                    <CardFooter>
                      <Text fontSize="xs">
                        Ditulis oleh {post.node.author.node.name}
                      </Text>
                    </CardFooter>
                  </Card>
                ))}
              </SimpleGrid>
            </Box>
          </main>
        </Box>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}
