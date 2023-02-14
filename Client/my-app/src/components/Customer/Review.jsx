import Navbar from "./Navbar";

export default function Review() {

    return (
        <>
            <Navbar features={false}/>
            <div class="login_page4">
                <div class="form-box4" style={{marginTop:"20vh"}}>
                    <div class="button-box5">
                        <div id="btn7"> Review Our Website!</div>
                        <button type="button"></button>
                    </div>
                    <form>
                        <div class="textarea">
                            <textarea cols="30" placeholder="Describe your experience.."></textarea>
                        </div>
                        <button type="submit" class="submit-btn6">Post</button>
                    </form>
                </div>
            </div>
        </>
    );
}
