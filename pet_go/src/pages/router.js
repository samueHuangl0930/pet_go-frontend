import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login/index";
import Counter from "./counter/counter";
import Home from "./Home/index";
import HomeLogin from "./Home/index";

import QQLayout from "../Layout/QQLayout";

import Owner from "./Experience/owner";
import NoPet from "./Experience/ownerNoPet";

import CheckPetN from "./Experience/ownerCheckPetNoComm";
import CheckPet from "./Experience/ownerCheckPet";

import ExPet from "./Experience/exPet";
import ExPetLogin from "./Experience/exPet";
import ExPetCheck from "./Experience/exPetCheckPet";
import RequestExPetCheck from "./Experience/exPetCheckPet";
import RequestExPetCheck1 from "./Experience/exPetCheckPet1";

import ownerExPetCheck from "./Experience/exPetCheckPet";

import Adoption from "./Adoption/adoptionAlready";
import AdoptionLogin from "./Adoption/adoptionAlready";

import AdoptionCheck from "./Adoption/adoptionCheckPet";
import RequestAdoptionCheck1 from "./Adoption/adoptionCheckPet1";
import AdoptionNone from "./Adoption/adoptionNotYet";
import AdoptionNoneLogin from "./Adoption/adoptionNotYet";

import ReceiveMemberDetail from "./ReceiveRequest/memberDetail";
import CheckMembersPet from "./ReceiveRequest/checkMembersPet";

import NotFound from "./NotFound/index";
import GlobalLayout from "../Layout/QQLayout";

import Experience from "./Experience/Experience";
import OIllustrate from "./Experience/ownerIllustrate";
import ExIllustrate from "./Experience/exIllustrate";
import Member from "./Member/Member";
import Pet from "./Member/Pet";
import PetAdd from "./Member/petAdd";

import RearingPet from "./Member/Rearing-pet";
import ResetPassword from "./Member/resetPassword";

import EXAddForm from "./Form/EXAddForm";
import EXForm from "./Form/EXForm";
import SearchRequestForm from "./Form/SearchRequestForm";
import SearchSharerForm from "./Form/SearchSharerForm";
import DoingShareDetailed from "./RecordDeatiled/DoingShareDetailed";
import ExperienceDetailed from "./RecordDeatiled/ExperienceDetailed";
import ShareDetailed from "./RecordDeatiled/ShareDetailed";
import DoingShareList from "./RecordList/DoingShareList";
import ExperienceList from "./RecordList/ExperienceList";
import ShareList from "./RecordList/ShareList";

import Signup from "./Signup/index.js";
import Forget from "./Forget/index.js";
import Revise from "./Forget/index2.js";

import Comment from "./Comment/index.js";

import Petlist from "./Petlist/index.js";
import Norequest from "./sendrequest/norequest.js";
import Sentrequest from "./sendrequest/sendrequest.js";
import Sentrequest1 from "./sendrequest/sendrequestD.js";
import Sentrequest2 from "./sendrequest/sendrequestC.js";

import Receiverequest from "./Getrequest/getrequest";
import Noreceiverequest from "./Getrequest/norequest";

import Test from "./test";

console.log("Router進入");
function Router() {
  console.log("Router內部進入");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<QQLayout />}>
          <Route path="test" element={<Test />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="forget" element={<Forget />} />
          <Route path="forget/revise" element={<Revise />} />
          <Route path="comment" element={<Comment />} />
          <Route path="pet-list" element={<Petlist />} />
          <Route path="pet-list/add" element={<PetAdd/>} />

          <Route path="nosent-request" element={<Norequest />} />
          <Route path="sent-request" element={<Sentrequest />} />
          <Route path="sert-request" element={<Sentrequest1 />} />
          <Route path="sent-nequest" element={<Sentrequest2 />} />

          <Route path="receive-request" element={<Receiverequest />} />
          <Route path="noreceive-request" element={<Noreceiverequest />} />
          <Route path="norequest" element={<Norequest />} />

          <Route path="/" element={<Home />} />
          {/* 登入後首頁 */}
          <Route path="/home" element={<HomeLogin />} />

          <Route path="counter" element={<Counter />} />

          {/* 體驗 */}
          <Route path="experience" element={<Experience />} />
          <Route path="experience/owner-illustrate" element={<OIllustrate />} />
          <Route
            path="experience/experiencer-illustrate"
            element={<ExIllustrate />}
          />

          {/* 會員資料 */}
          <Route path="member" element={<Member />} />
          <Route path="pet-list/pet/:id" element={<Pet />} />
          <Route path="rearing-pet" element={<RearingPet />} />
          <Route path="member/reset-password" element={<ResetPassword />} />

          {/* 表單 */}
          <Route
            path="experience/owner-illustrate/post/add-form"
            element={<EXAddForm />}
          />
          <Route
            path="experience/experiencer-illustrate/card/ex-pet-detail/ex-form"
            element={<EXForm />}
          />
          <Route
            path="share-already/search-request-form"
            element={<SearchRequestForm />}
          />
          <Route
            path="share-already/search-sharer-form"
            element={<SearchSharerForm />}
          />

          {/* 紀錄清單 */}
          <Route path="record/DoingShare/list" element={<DoingShareList />} />
          <Route path="record/Experience/list" element={<ExperienceList />} />
          <Route path="record/Share/list" element={<ShareList />} />

          {/* 紀錄詳細 */}
          <Route
            path="record/doingShare/detailed"
            element={<DoingShareDetailed />}
          />
          <Route
            path="record/experience/detailed"
            element={<ExperienceDetailed />}
          />
          <Route path="record/share/detailed" element={<ShareDetailed />} />

          {/* 飼主專區 */}
          <Route path="experience/owner-illustrate/post" element={<Owner />} />
          {/* 飼主專區-無寵物 */}
          <Route
            path="experience/owner-illustrate/nopost"
            element={<NoPet />}
          />
          {/* 飼主專區-查看詳細 */}
          <Route
            path="experience/owner-illustrate/post/ex-pet-detail"
            element={<CheckPet />}
          />
          {/* 飼主專區-查看詳細-無評論 */}
          <Route
            path="experience/owner-illustrate/post/ex-pet-detail-no"
            element={<CheckPetN />}
          />
          {/* 體驗者專區首頁 */}
          <Route
            path="Experience/experiencer-illustrate/card"
            element={<ExPet />}
          />
          <Route
            path="experience/experiencer-illustrate/card-login"
            element={<ExPetLogin />}
          />
          {/* 體驗者專區-查看 */}
          <Route
            path="experience/experiencer-illustrate/card/ex-pet-detail/:id"
            element={<ExPetCheck />}
          />
          <Route
            path="sent-request/ex-pet-detail"
            element={<RequestExPetCheck />}
          />
           <Route
            path="sent-request/ex-pet-detaii"
            element={<RequestExPetCheck1 />}
          />
          <Route path="owner/ex-pet-detail" element={<ownerExPetCheck />} />

          {/* 已有共養人 */}
          <Route path="share-already" element={<Adoption />} />
          <Route path="share-already-login" element={<AdoptionLogin />} />
          <Route
            path="share-already/share-pet-detail/:id"
            element={<AdoptionCheck />}
          />
          <Route
            path="sent-request/share-pet-detaii"
            element={<RequestAdoptionCheck1 />}
          />

          {/* 未有共養人 */}
          <Route path="share-none" element={<AdoptionNone />} />
          <Route path="share-none-login" element={<AdoptionNoneLogin />} />

          {/* 我收到的請求-查看詳細-會員資料 */}
          <Route
            path="receive-request/member-detail"
            element={<ReceiveMemberDetail />}
          />
          {/* 我收到的請求-查看詳細-會員資料-養寵經歷寵物詳細 */}
          <Route
            path="receive-request/member-detail/request-pet-detail"
            element={<CheckMembersPet />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
