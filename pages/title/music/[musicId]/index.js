import Header from "../../../../components/exclusive/Header/Header";
import MusicTitlePage from "../../../../components/exclusive/TitlePage/Music/MusicTitlePageMaster";

import {
  HeaderWrapper,
  PageWrapper,
} from "../../../../components/universal/Containers.styles";

import { useRouter } from "next/router";

import { musiclist } from "../../../../public/music-data/music-data";

function MusicTitle({ musicData }) {
  const router = useRouter();
  const titleId = router.query.gameId;

  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <MusicTitlePage musicData={musicData} />
      </PageWrapper>
    </>
  );
}

export async function getStaticPaths() {
  const topMusicIDs = musiclist.top10.album.map(
    (album) =>
      `${album.artist.name.replace(/\s/g, "+")}-${album.name.replace(
        /\s/g,
        "+"
      )}`
  );
  const countryIDs = musiclist.country.album.map(
    (album) => `${album.artist}-${album.name}`
  );
  const danceIDs = musiclist.dance.album.map(
    (album) => `${album.artist}-${album.name}`
  );
  const hiphopIDs = musiclist.hiphop.album.map(
    (album) => `${album.artist}-${album.name}`
  );
  const jazzIDs = musiclist.jazz.album.map(
    (album) => `${album.artist}-${album.name}`
  );
  const popularIDs = musiclist.popular.album.map(
    (album) => `${album.artist}-${album.name}`
  );
  const rockIDs = musiclist.rock.album.map(
    (album) => `${album.artist}-${album.name}`
  );

  let IDs = [
    ...topMusicIDs,
    ...countryIDs,
    ...danceIDs,
    ...hiphopIDs,
    ...jazzIDs,
    ...popularIDs,
    ...rockIDs,
  ];

  return {
    fallback: true,
    paths: IDs.map((ID) => ({ params: { musicId: ID } })),
  };
}

export async function getStaticProps(context) {
  const musicId = context.params.musicId;
  const artistAndAlbum = musicId.split("-");

  const artist = artistAndAlbum[0];
  const album = artistAndAlbum[1];

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=47a0d3657aa0b16a650b3476d333aab3&artist=${artist}&album=${album}&format=json`
  );
  const selectedMusicData = await res.json();

  return {
    props: {
      musicData: selectedMusicData,
    },
  };
}

export default MusicTitle;
