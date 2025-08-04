
import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkles } from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import Creationitem from "../components/Creationitem";

type Creation = {
  id: number;
  user_id: string;
  prompt: string;
  content: string;
  type: string;
  publish: boolean;
  likes: never[];
  created_at: string;
  updated_at: string;
};

const Dashboard = () => {
  const [creations, setCreations] = useState<Creation[]>([]);

  const getDashboardData = async () => {
    setCreations(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className=' h-full overflow-y-scroll p-6'>
      <div className=' flex justify-start gap-4 flex-wrap'>
        {/* Total creations card */}
        <div className=' flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200'>
          <div className=' text-slate-600'>
            <p className=' text-sm'>Total creations</p>
            <h2 className=' text-xl font-semibold'>{creations.length}</h2>
          </div>
          <div className=' w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588f2] to-[#0bb0d7] text-white flex justify-center items-center'>
            <Sparkles className=' w-5 text-white' />
          </div>
        </div>

        {/* Acitve plan card */}
        <div className=' flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200'>
          <div className=' text-slate-600'>
            <p className=' text-sm'>Active Plan</p>
            <h2 className=' text-xl font-semibold'>
              <Protect plan={"premium"} fallback='Free'>
                Premium
              </Protect>
            </h2>
          </div>
          <div className=' w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff61c5] to-[#9e53ee] text-white flex justify-center items-center'>
            <Gem className=' w-5 text-white' />
          </div>
        </div>
      </div>
      <div className=' space-y-3'>
        <p className=' mt-6 mb-4'>Recent Creations</p>
        {creations.map((item) => (
          <Creationitem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;