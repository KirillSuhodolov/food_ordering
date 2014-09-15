class Api::V1::PunishmentController < Api::BaseApiController
  respond_to :json

  def exterminate
    if current_user.name == 'test_debug' and current_user.id == 42
      Food.destroy_all
      render json: {ok: 'ok'}
    else
      render json: {no: 'no'}
    end
  end

  def ability
    {
      admin: [:exterminate]
    }
  end
end
