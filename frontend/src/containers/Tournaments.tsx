import { FC, useEffect } from "react";
import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";
import Layout from "components/Layout";

import { CommonContainer } from "common/commonMaterial";
import { fetchAsyncGetTournaments } from "ducks/tournaments/slice";
import { useTournamentsHook } from "hooks/tournamentsHook";

import {
  RegistButton,
  registButtonSx,
  tournamentsCardSx,
  tournamentsCardMediaSx,
  tournamentsCardContentSx,
  viewAreaSx,
  eventDateCardSx,
  eventDateCardMediaSx,
  placeCardSx,
  placeCardMediaSx,
  applicationEndCardSx,
  applicationEndCardMediaSx,
  buttonAreaSx,
  DetailViewButton,
  detailViewButtonSx,
  ApplicantButton,
  applicantButtonSx,
  applicantNormalFontSx,
  applicantSpecialFontSx,
} from "themes/tournamentsTheme";

const Tournaments: FC = () => {
  // ReactHook
  const {
    dispatch,
    tournamentsInfo,
    page,
    onClickCard,
    onClickButton,
    applicantJudge,
  } = useTournamentsHook();

  // useEffect
  useEffect(() => {
    (async () => {
      await dispatch(fetchAsyncGetTournaments());
    })();
  }, [page, dispatch]);

  return (
    <>
      <Layout>
        <CommonContainer>
          <RegistButton
            variant="contained"
            onClick={() => onClickButton()}
            sx={registButtonSx}
          >
            新規登録
          </RegistButton>
          {tournamentsInfo.map((tournamentInfo) => {
            return (
              <Card variant="outlined" sx={tournamentsCardSx}>
                <CardMedia sx={tournamentsCardMediaSx}>
                  {tournamentInfo.tournamentTitle}
                </CardMedia>
                <CardContent sx={tournamentsCardContentSx}>
                  <Box sx={viewAreaSx}>
                    <Card sx={eventDateCardSx}>
                      <CardMedia sx={eventDateCardMediaSx}>開催日</CardMedia>
                      <CardContent>{tournamentInfo.eventDate}</CardContent>
                    </Card>
                    <Card sx={placeCardSx}>
                      <CardMedia sx={placeCardMediaSx}>会場</CardMedia>
                      <CardContent>{tournamentInfo.place}</CardContent>
                    </Card>
                    <Card sx={applicationEndCardSx}>
                      <CardMedia sx={applicationEndCardMediaSx}>
                        申込期限
                      </CardMedia>
                      <CardContent>
                        {tournamentInfo.applicationEndDate}
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={buttonAreaSx}>
                    <DetailViewButton
                      variant="contained"
                      onClick={() => onClickCard(tournamentInfo)}
                      sx={detailViewButtonSx}
                    >
                      要項をみる
                    </DetailViewButton>
                    <ApplicantButton
                      variant="contained"
                      disabled={applicantJudge(tournamentInfo)}
                      onClick={() => onClickCard(tournamentInfo)}
                      sx={applicantButtonSx}
                    >
                      <Typography sx={applicantNormalFontSx}>
                        この大会へ
                      </Typography>
                      <Typography sx={applicantSpecialFontSx}>
                        申し込む
                      </Typography>
                    </ApplicantButton>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </CommonContainer>
      </Layout>
    </>
  );
};

export default Tournaments;
