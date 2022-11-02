import StyledBgVideo from './MainBg.styled';
import video from '../../assets/images/production ID 3765078.mp4';


function MainBg() {
  return (
    <StyledBgVideo>

    <video src={video} autoPlay loop muted type="video/mp4" />
    </StyledBgVideo>
  );
}

export default MainBg;